## Thndr mobile task

Task submission for Abdallah Ebrahim.
The following application implements explore screen that lists nasdaq stocks, user can search stocks by name and it implements infinite scrolling for pagination.

## Table of Contents

- [Getting Started](#getting-start)
- [Architecture](#architecture)
- [Tech stack](#tach-stack)

## 🚀 Getting Start

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
npm install
```

for iOS you will need to install required pods

```bash
cd ios

bundle exec
bundle exec pod install
```

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

Then you can run Android:

```bash
# running android
npm run android

# OR
yarn run android
```

for iOS:

```bash
# running ios
npm run ios

# OR
yarn run ios
```

## 🏗️ Architecture

For a scalable and maintainable stock trading app like this, we need a clean architecture that separates concerns, supports scalability, and ensures testability.

### 1. High level architecture

```
src/
├── api/
├── components/
├── features/
│   ├── explore/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── styles/
│   │   ├── index.ts
├── navigation/
├── services/
├── lib/
├── state/
├── utils/
├── App.tsx
```

### 2. Architecture layers

#### Data Layer

- Handles API calls and caching logic.
- Use Axios for network requests.
- Implement a caching layer with libraries like React Query or a custom solution using AsyncStorage.

Example:

```ts
async function fetchTickers() {
  try {
    const response = await axios.get<PolygonResponse<Ticker>>('/tickers');
    return response.data;
  } catch (error) {
    console.error(error);
    return { results: [], status: '', request_id: '', count: 0, next_url: '' };
  }
}
```

#### Domain Layer

- Abstracts the business logic.
- This is where you define reusable utility functions or custom hooks for fetching and manipulating stock data.

Example:

```ts
import { useQuery } from 'react-query';
import { fetchTickers } from '../api/tickers';

export const useTickers = (search: string) => {
  return useQuery([QueryKeys.Tickers, search], () => fetchTickers({ search }));
};
```

#### Presentation Layer

- Consists of UI components, screens, and hooks.
- Follow a container-component pattern:
  - Containers handle state and logic.
  - Components are pure and focus on rendering.

Example:

```tsx
const ExploreScreen = () => {
  const [search, setSearch] = useState('');
  const { data } = useTickers(search);

  return (
    <Container>
      <SearchInput search={search} onSearch={onSearch} />
      <TickersList tickers={data} />
    </Container>
  );
};
```

#### State management

For the current requirements, there was no much need to a state management solution, as tanstack query handles server side state and caching for our listing apis.

Later on we can manage the state using Zustand or Jotai for example, using the same architecture of feature-based stores.

#### Testing

In the current structure we support unit testing, we are using Jest, @testing-library/react-native as our testing setup

- feature-based/multi-file components can have `__tests__` folder to include all unit tests.
- single components/files should have `{name}-test.{ts|tsx}` close to the file.
- if mock data is needed, it should be in `__fixtures__` folder.

## ❇️ Tech Stack

- #### React native

  used react native cli to scaffold the application

- #### TanStackQuery
  TanStack query / react-query offers a simple and intiuative way to fetch data from server-side, used here to manage caching out of the box.

# Notes

- Some folders includes only `.gitkeep` file, its placed there to keep the folder structure and project files traced on git.
-

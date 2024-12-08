export type PolygonResponse<T> = {
  results: T[];
  status: string;
  request_id: string;
  count: number;
  next_url: string;
};

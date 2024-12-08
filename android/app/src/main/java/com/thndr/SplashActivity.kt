package com.thndr

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.util.Log;

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        try {
            super.onCreate(savedInstanceState)

            val originalIntent = intent

            val intent = Intent(this, MainActivity::class.java)
            originalIntent.extras?.let { extras ->
                intent.putExtras(extras)
            }
            startActivity(intent)
            finish()
        } catch (e: Exception) {
            Log.e("Error Splash", e.message ?: "Unknown error")
            println(e.message)
        }
    }
}

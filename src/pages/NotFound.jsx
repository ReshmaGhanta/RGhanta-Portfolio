import React from 'react'

const NotFound = () => {
  return (
    <body className="bg-white h-full">
  <main className="min-h-screen grid place-items-center bg-white px-4">
    <div className="text-center max-w-xl">
      <p className="font-semibold text-primary text-5xl">404</p>

      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
        Page not found
      </h1>

      <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a href="" className="cosmic-button">
          Go back home
        </a>
      </div>
    </div>
  </main>
</body>
  )
}

export default NotFound
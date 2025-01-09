
export const Hello = () => {
    return (
        <html>
            <head>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Simple API Page</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                </head>
            </head>
            <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
                <div className="container mx-auto px-4 py-10">
                    {/* Header */}
                    <header className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Customer API</h1>
                        <p className="text-lg text-gray-600">A simple API to fetch and manage data efficiently.</p>
                    </header>

                    {/* About the API */}
                    <section className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">About This API</h2>
                        <p className="text-gray-600 leading-relaxed">
                            This API provides access to a wide range of data, allowing developers to easily integrate it into their applications.
                            With fast response times and robust endpoints, this API is perfect for building modern web and mobile apps.
                        </p>
                    </section>

                    {/* Footer */}
                    <footer className="text-center mt-10 text-gray-500">
                        <p>
                            Powered by <a href="#" className="text-blue-500 hover:underline">Your Name</a> - 2025
                        </p>
                    </footer>
                </div>
            </div>
        </html>
    );
}
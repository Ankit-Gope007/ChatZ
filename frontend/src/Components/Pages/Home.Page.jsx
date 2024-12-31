import React from 'react'

const HomePage = () => {
    return (
        <>
            <div class="h-screen flex bg-gray-900 text-white">
                {/* <!-- Left Section: Chat Messages --> */}
                <div class="w-[70%] bg-gray-800 p-4 ">
                    <div class="h-full border-r-2 border-gray-700 flex flex-col">
                        {/* <!-- Header --> */}
                        <div class="p-4 bg-gray-700 border-b-2 border-gray-600">
                            <h1 class="text-lg font-semibold">Chat Messages</h1>
                        </div>
                        {/* <!-- Messages Section --> */}
                        <div class="flex-1 overflow-y-auto p-4 space-y-4">
                            {/* <!-- Example message --> */}
                            <div class="bg-blue-600 p-3 rounded-lg max-w-md self-start">
                                Hello, how are you?
                            </div>
                            <div class="bg-green-600 p-3 rounded-lg max-w-md self-end">
                                I'm good, thank you! What about you?
                            </div>
                            {/* <!-- More messages go here --> */}
                        </div>
                        {/* <!-- Input Section --> */}
                        <div class="p-4 bg-gray-700 border-t-2 border-gray-600 flex items-center space-x-2">
                            <input
                                type="text"
                                class="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg outline-none focus:ring focus:ring-blue-500"
                                placeholder="Type a message..."
                            />
                            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Right Section: Add Chat --> */}
                <div class="w-[30%] bg-gray-800 p-4">
                    <div class="h-full flex flex-col">
                        {/* <!-- Header --> */}
                        <div class="p-4 bg-gray-700 border-b-2 border-gray-600">
                            <h1 class="text-lg font-semibold">Add a Chat</h1>
                        </div>
                        {/* <!-- Add Friend Form --> */}
                        <div class="flex-1 p-4">
                            <form class="space-y-4">
                                <input
                                    type="text"
                                    class="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Enter username"
                                />
                                <button
                                    type="submit"
                                    class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Send Friend Request
                                </button>
                            </form>
                        </div>
                        {/* <!-- Footer --> */}
                        <div class="p-4 bg-gray-700 border-t-2 border-gray-600">
                            <p class="text-sm text-gray-400 text-center">Start chatting now!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
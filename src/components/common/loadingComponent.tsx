import React from 'react';

export default function LoadingModal({ isLoading }: { isLoading: boolean }): React.ReactElement | null {
    if (!isLoading) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-xl">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
                <p className="mt-4 text-lg font-semibold text-gray-700">처리중..</p>
            </div>
        </div>
    );
}
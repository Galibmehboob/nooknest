export default function LoadingSpinner() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="relative">


                <div className="absolute inset-0 rounded-full blur-2xl bg-[#1f325b]/40 animate-pulse"></div>


                <div className="w-20 h-20 rounded-full border-[5px] border-white/10 border-t-[#1f325b] animate-spin"></div>

            </div>
        </div>
    );
}
import { Calendar, PlayCircle, Trophy } from "lucide-react";

export function ActionButtonGrid() {
    const actions = [
        {
            icon: <PlayCircle className="w-12 h-12 mb-4 text-white" />,
            title: "View Showreel",
            description: "Experience our cinematic approach",
        },
        {
            icon: <Calendar className="w-12 h-12 mb-4 text-white" />,
            title: "Book Services",
            description: "Secure your date today",
        },
        {
            icon: <Trophy className="w-12 h-12 mb-4 text-white" />,
            title: "Our Portfolio",
            description: "Award-winning event coverage",
        }
    ];

    return (
        <section className="bg-black py-12 relative z-20 -mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {actions.map((action, idx) => (
                        <button 
                            key={idx}
                            className="flex flex-col items-center justify-center p-12 bg-gray-900 border border-white/10 rounded-[2rem] hover:bg-gray-800 hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="transform group-hover:scale-110 transition-transform duration-300">
                                {action.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                                {action.title}
                            </h3>
                            <p className="text-gray-400 font-medium">
                                {action.description}
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

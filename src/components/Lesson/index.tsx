import { CheckCircle, Lock } from "phosphor-react";
import { isPast,format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Props {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson({ title, slug, type, availableAt }: Props) {
    const isLessonAvailable = isPast(availableAt);
    const availableDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm",{locale:ptBR});

    return (
        <a href="">
            <span className="text-gray-300">
                {availableDateFormat}
            </span>

            <div className="border rounded border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteudo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Embreve
                        </span>
                    )}

                    <span className="text-xs border rounded py-[0.125rem] px-2 text-white border-green-300 font-bold">
                        {type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>

                </header>

                <strong className="text-gray-200 mt-5 block">
                    {title}
                </strong>
            </div>
        </a>
    );
}
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface Props {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: Props) {
    const { slug } = useParams<{ slug: string }>();

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormat = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormat}
            </span>

            <div className={classNames({
                'border rounded border-gray-500 p-4 mt-2': true,
                'bg-green-500': isActiveLesson
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames({
                            "text-sm text-blue-500 font-medium flex items-center gap-2": true,
                            "text-white": isActiveLesson,
                            "text-blue-500": !isActiveLesson
                        })}>
                            <CheckCircle size={20} />
                            Conteudo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Embreve
                        </span>
                    )}

                    <span className={classNames("text-xs border rounded py-[0.125rem] px-2 text-white border-green-300 font-bold", {
                        "border-white": isActiveLesson,
                        "border-green-300": !isActiveLesson,
                    })}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
                    </span>

                </header>

                <strong className={classNames({
                    "text-gray-200 mt-5 block": true,
                    'text-gray-200': !isActiveLesson,
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    );
}
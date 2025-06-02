import { Ellipsis } from 'lucide-react'
import React from 'react'

type ColumnTitleItem = {
    name: string;
    onClick: () => void;
    isActive?: boolean;
};

type Props = {
    children: React.ReactNode;
    columnTitleProps: ColumnTitleItem[];
    columnTitleEvent?: () => void;
    isInsight?: boolean
};

const ColumnPage = ({ children, columnTitleProps, isInsight = false }: Props) => {
    return (
        <main>
            <section className="main-header">
                <div className="w-full relative flex items-center justify-center gap-14 text-sm font-bold tracking-wider py-5">
                    {columnTitleProps.map((title, index) => {
                        const isActive = title.isActive ?? true;

                        return (
                            <button
                                key={index}
                                onClick={title.onClick}
                                className={`
                                    ${isActive
                                        ? 'text-white border-white'
                                        : 'text-neutral-500 hover:text-white'
                                    }`
                                }
                            >
                                {title.name}
                            </button>
                        );
                    })}
                    <button className='absolute border border-muted rounded-full p-1 right-5.5 bg-accent'><Ellipsis className='w-3.5 h-3.5 stroke-white ' /></button>
                </div>
            </section>
            {isInsight ? (
                <section className="main-content-insights">
                    {children}
                </section>
            ) : (
                <section className="main-content">
                    {children}
                </section>
            )}

        </main>
    )
}

export default ColumnPage
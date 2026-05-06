type StatCardType = {
    title?: string | "none",
    content?: string,
    contentInfo?: string | "none",
    role?: string | "none",
    period?: PeriodType,
    icon: "Plus" | "X" | "Circle" | "none",
    items?: string[]
}

type PeriodType = {
    startDate: string,
    endDate: string
}

export default function StatCard({title, content, contentInfo, role, period, icon, items}: StatCardType) {
    const isCompactCard = icon === "Plus" || icon === "X" || icon === "none";
    const hasTitle = title;
    const hasContent = content || contentInfo;
    const isTitleItemsOnly = Boolean(hasTitle) && !hasContent && Boolean(items?.length);


    return(
        <div className={`flex flex-col bg-white p-3 border border-gray-200 rounded-xl min-h-24 w-full gap-3
            ${isTitleItemsOnly ? "justify-start" : "justify-center"}`}>

            {isCompactCard ? (
                <div className={`flex flex-col h-full ${isTitleItemsOnly ? "justify-start gap-1" : "justify-center gap-3"}`}>
                    { hasTitle && 
                        <p className="text-xs opacity-50 font-mono uppercase self-start">{title}</p>
                    }

                    { hasContent &&                     
                        <div className="flex flex-col">
                            <p className="text-xl">{content}</p>
                            <p className="text-xs opacity-50">{contentInfo}</p>
                        </div>
                    }
                </div>
            ) : (
                <div className="flex justify-between">                    
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="text-xs opacity-40 font-mono uppercase">{title}</p>

                            <div className="flex flex-row bg-background rounded-full px-2 py-0.5 text-xs opacity-50 gap-1">
                                <p>{period?.startDate}</p>
                                -
                                <p>{period?.endDate}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-lg font-bold">{contentInfo}</p>

                            <div className="flex flex-row gap-3">
                                <p className="text-xs">{role}</p>
                                {icon}
                                <p className="text-xs">{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="flex flex-row flex-wrap gap-1">
                {items?.map((item) => (
                    <span
                        key={item}
                        className="rounded-md py-0.5 px-1 font-mono
                            bg-background text-xs w-fit"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
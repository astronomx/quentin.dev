type StatCardType = {
    title: string,
    titleTop: boolean,
    content: string,
    items: string[]
}

export default function StatCard({title, titleTop, content, items}: StatCardType) {
    return(
        <div className={`flex ${titleTop ? "flex-col" : "flex-col-reverse"} 
            bg-zinc-300 dark:bg-[#111827]`}>
                
            <p>{title}</p>
            <p>{content}</p>
            
            <div className="flex flex-row gap-1">
                {items.map((item) => (
                    <span
                        key={item}
                        className="rounded-md py-0.5 px-1 font-mono
                            text-xs w-fit"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
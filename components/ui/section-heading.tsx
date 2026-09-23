type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionHeadingProps) {
    const centered = align === "center";

    return (
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">
                {eyebrow}
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                {title}
            </h2>
            {description && (
                <p className="mt-6 text-lg leading-8 text-slate-400">{description}</p>
            )}
        </div>
    );
}

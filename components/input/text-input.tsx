type TextInputProps = {
    value: string;
    handleInputChange: (key: string, value: string) => void;
    textarea?: boolean;
    label: string;
    inputKey: string;
    type?: "text" | "email";
};

export default function TextInput({
    value,
    handleInputChange,
    textarea = false,
    label,
    inputKey,
    type = "text",
}: TextInputProps) {
    const sharedClasses =
        "peer w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 pb-3 pt-7 text-white outline-none transition placeholder:text-transparent focus:border-cyan-300/60 focus:bg-slate-950";

    return (
        <div className="relative">
            {textarea ? (
                <textarea
                    id={inputKey}
                    name={inputKey}
                    rows={6}
                    required
                    placeholder={label}
                    className={`${sharedClasses} resize-none`}
                    value={value}
                    onChange={({ target }) => handleInputChange(inputKey, target.value)}
                />
            ) : (
                <input
                    id={inputKey}
                    name={inputKey}
                    type={type}
                    required
                    placeholder={label}
                    className={sharedClasses}
                    value={value}
                    onChange={({ target }) => handleInputChange(inputKey, target.value)}
                />
            )}
            <label
                htmlFor={inputKey}
                className="pointer-events-none absolute left-4 top-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500 transition peer-focus:text-cyan-300"
            >
                {label}
            </label>
        </div>
    );
}

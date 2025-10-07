export const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChilder: 0.2,
            delayChildren: 0.3
        }
    }
}

export const itemVariants: any = {
    hidden: { y:30, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
}

export const imageVariants: any = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut" as const,
                delay: 0.5
            }
        }
    }

export const textVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
}

export const skillBarVariants: any = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: any) => ({
        width: `${level}%`,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "easeOut" as const,
            delay: 0.3
        }
    })
}

export const scrollToSection = (sectionId: string) => {

    const element = document.getElementById(sectionId)

    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }

}
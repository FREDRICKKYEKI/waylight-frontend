
export function LastSection(props: any) {
    return (
        <div className="px-[5%] py-16 mx-auto">
            <div className="container mx-auto">
                <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {props.title}
                </h4>
                <p className="md:text-md">
                    {props.description}
                </p>
                <div className="mt-6 md:mt-8">
                    <a href={props.ctaButtonLink}
                        className="bg-primary-01/10 hover:bg-secondary-01/10 hover:text-secondary-01 p-2 rounded-full text-primary-01
       font-semibold shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 ease-in-out px-3">
                        {props.ctaButtonText}
                    </a>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export const PricingSection = (props: any) => {
    const cantileverPricing = [
        { cars: '1 Car', size: '3.5 by 5.5M', price: '120,000' },
        { cars: '2 Cars', size: '5.5 M by 5.5M', price: '180,000' },
        { cars: '3 Cars', size: '8.5 M by 5.5M', price: '257,125' },
        { cars: '4 Cars', size: '10.5 M by 5.5M', price: '332,750' },
        { cars: '5 Cars', size: '13 M by 5.5M', price: '393,250' },
    ];
    const curvedPricing = [
        { cars: '1 Car', size: '4 M by 6 M', price: '144,000' },
        { cars: '2 Cars', size: '6.5 M by 6 M', price: '234,000' },
        { cars: '3 Cars', size: '9 M by 6 M', price: '324,000' },
        { cars: '4 Cars', size: '12 M by 6 M', price: '432,000' },
        { cars: '5 Cars', size: '15 M by 6 M', price: '540,000' },
    ];
    return (
        <section id="section__pricing" className="px-[5%] py-4 md:py-16 text-dark-01 overflow-hidden">
            <div className="container mx-auto space-y-12 md:space-y-16 lg:space-y-20">
                <div>
                    <h2 className="text-4xl leading-[1.2] md:text-5xl lg:text-6xl">{props.title}</h2>
                    <p className="mt-4 text-md md:text-lg">
                        {props.description}
                    </p>
                </div>
                {props.carShadeTypes.map((type: any, index: number) => (
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {index % 2 === 0 ? (
                            <>
                                <div className='col-span-1'>
                                    <img src={type.image} alt="Cantilever Car Parking Shade" className="w-full h-auto mx-auto lg:w-[80%]" />
                                </div>
                                {/* table */}
                                <div className='col-span-1'>
                                    <div className='mb-4'>
                                        <h3 className='text-2xl font-semibold mb-4'>{type.title}</h3>
                                    </div>
                                    <RenderPricingTable pricingData={type.pricingTable} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='col-span-1'>
                                    <div className='mb-4'>
                                        <h3 className='text-2xl font-semibold mb-4'>{type.title}</h3>
                                    </div>
                                    <RenderPricingTable pricingData={type.pricingTable} />
                                </div>
                                {/* image(curved) */}
                                <div className='col-span-1'>
                                    <img
                                        src={type.image} alt="Curved Car Parking Shade" className="w-full h-auto mx-auto lg:w-[80%]" />
                                </div>
                            </>
                        )
                        }
                    </div>
                ))}
                {/* cantilever car parking shades prices */}
                {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'> */}
                {/* image(cantilever) */}
                {/* <div className='col-span-1'> */}
                {/* <img src="" alt="Cantilever Car Parking Shade" className="w-full h-auto" /> */}
                {/* </div> */}
                {/* table */}
                {/* <div className='col-span-1'> */}
                {/* <div className='mb-4'> */}
                {/* <h3 className='text-2xl font-semibold mb-4'>Cantilever Car Parking Shades</h3> */}
                {/* </div> */}
                {/* <RenderPricingTable pricingData={cantileverPricing} /> */}
                {/* </div> */}
                {/* </div> */}
                {/* Curved Car parking shades */}
                {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'> */}
                {/* table */}
                {/* <div className='col-span-1'> */}
                {/* <div className='mb-4'> */}
                {/* <h3 className='text-2xl font-semibold mb-4'>Curved Car Parking Shades</h3> */}
                {/* </div> */}
                {/* <RenderPricingTable pricingData={curvedPricing} /> */}
                {/* </div> */}
                {/* image(curved) */}
                {/* <div className='col-span-1'> */}
                {/* <img src="" alt="Curved Car Parking Shade" className="w-full h-auto" /> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        </section>
    )
}


const RenderPricingTable = ({ pricingData }: any) => {
    return (
        <table className='pricing-table' style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
            <thead>
                {/* first row only of {pricingData.rows */}
                {pricingData.rows[0].cells.map((cell: any, idx: any) => (
                    <th key={idx} style={{ border: '1px solid black', padding: '8px' }}>
                        {cell}
                    </th>
                ))}
            </thead>
            <tbody>
                {pricingData.rows.slice(1,).map((row: any, idx: any) => (
                    <tr key={idx}>
                        {row.cells.map((cell: any, cellIdx: any) => (
                            <td style={{ border: '1px solid black', padding: '8px' }}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
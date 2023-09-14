interface Properties {
    heading: string,
    description: string
}

const StatCard = ( { heading, description }: Properties ) => {

    return (
        <div className="stat-card">
            <div className='circle-container'>
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
            </div>
            <h2>{ heading }</h2>
            <p>{ description }</p>
        </div>
    )
}

const Stats = () => {

    return (
        <section className="section-wrapper flex gap-2 wrap justify-center">
            <StatCard heading={ '25' } description='Signature Lattes' />
            <StatCard heading={ '5' } description='Years in Business' />
            <StatCard heading={ '1,000+' } description='Happy Customers' />
        </section>
    );
}

export default Stats;
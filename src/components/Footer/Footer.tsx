import { RiTwitterXLine, RiInstagramFill, RiFacebookBoxFill, RiLinkedinBoxFill } from 'react-icons/ri';

const Footer = () => {

    return (
        <section className="section-wrapper flex column gap-4 justify-center align-center">
            <div className="flower-container">
                <div className="flower round-tr" />
                <div className="flower round-tl" />
                <div className="flower round-full-bl" />
                <div className="flower round-full-br" />
            </div>
            <div className='flex width-full gap-2 align-center justify-center'>
                <RiTwitterXLine size={30} />
                <RiInstagramFill size={30} />
                <RiFacebookBoxFill size={30} />
                <RiLinkedinBoxFill size={30} />
            </div>
            <p className='text-center'>© Downtown Coffee Shop 2023. All rights reserved.</p>
        </section>
    );
}

export default Footer;
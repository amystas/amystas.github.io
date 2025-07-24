import './Gallery.css';
function Gallery()
{
    // const imageStyle = {
    //     height: '200px',
    //     transition: '1s',
    //     "&:hover": {
    //         height: "300px",
    //     },
    // };
    return (
        <>
        <div className='container py-5'>
        <h2 className="display-5 fw-bold mb-4 text-center text-success">Gallery</h2>
        <div className="container d-flex justify-content-center mt-5 align-items-center">
            <img className='galleryImages' src="images/lake.webp"></img>
            <img className='galleryImages' src="images/sign.jpg"></img>
            <img className='galleryImages' src="images/dragonfly.jpg"></img>
        </div>
        </div>
        </>
    )
}

export default Gallery;
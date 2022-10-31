import styles from './portfolio.module.scss'
import ImgGallery from './gallery';

export default function Portfolio() {

        return (

                <div className={styles.container}>

                        <h1>Portfolio</h1>
                        <div className={styles.projectContainerReverse}>
                                <div className={styles.textContainer}>
                                        <h2>RecipeBox</h2>
                                        <p> A personal recipe organizer for the home cook.
                                                Users are able to create, read, update, delete, and list their recipes.
                                                Implemented user interface using React with MaterialUI and Sass for styling.
                                                Import functionality implemented by scraping JSON-LD.
                                                Image upload and hosting implemented with Cloudinary.
                                                Authentication implemented using Auth0.
                                                Created two backends: API using Express and Mongoose with MongoDB and a serverless
                                                implementation using AWS API Gateway, Lambda, and DynamoDB.

                                                For demonstration purposes this deployment&#39;s authentication server is on development mode so you can sign up with any valid email format (example@mail.com) and valid password. Some recipes are also provided as to showcase the app. Feel free to create, edit, and delete as much as you&#39;d like.</p>
                                        <a href='https://serverless.d3370lenxs79be.amplifyapp.com/' target="_blank" rel="noopener noreferrer">
                                                <button className={styles.button}>
                                                        View Live Project
                                                </button>
                                        </a>
                                </div>
                                <div className={styles.galleryContainer}>
                                        <ImgGallery itemData={recipeboxImages} />
                                </div>
                        </div>
                        <div className={styles.projectContainer}>
                                <div className={styles.textContainer}>
                                        <h2>Storefront</h2>
                                        <p>An e-commerce fashion application.
                                                Implemented user interface using React with MaterialUI and Sass for styling.
                                                Used Redux for state management.
                                                Used Stripe API for secure payment.
                                                Created two backends: Express API and serverless lambda function to securely interact with the Stripe
                                                API.

                                                To simulate a successful transaction, use card number 4242 4242 4242 4242, a valid future date, any three digit CVC, any valid email format (example@mail.com), any five digits for zip code, and any name.
                                                Visit https://stripe.com/docs/testing to simulate other scenarios.</p>
                                        <a href='https://dev.d2kke5povhmi6.amplifyapp.com/' target="_blank" rel="noopener noreferrer">
                                                <button className={styles.button}>
                                                        View Live Project
                                                </button>
                                        </a>

                                </div>
                                <div className={styles.galleryContainer}>
                                        <ImgGallery itemData={storefrontImages} />
                                </div>
                        </div>




                </div>
        )
}

const recipeboxImages = [
        {
                img: "https://res.cloudinary.com/dyi8luau7/image/upload/v1666996595/recipe-box/recipe-box-login_fwinmj.png",
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666986004/recipe-box/recipe-box-home_pw92is.jpg',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666987321/recipe-box/recipe-box-read_pksvoi.jpg',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666987418/recipe-box/recipe-box-edit_u6viqn.jpg',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666987470/recipe-box/recipe-box-create_bcp3dt.jpg',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666988801/recipe-box/recipe-box-shopping-list_rgql3b.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666988806/recipe-box/recipe-box-home-mobile_fy0lge.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666988806/recipe-box/recipe-box-read-mobile_cczq0l.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666988806/recipe-box/recipe-box-edit-mobile_pgci1b.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666988805/recipe-box/recipe-box-create-mobile_kgfr7e.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666988805/recipe-box/recipe-box-shopping-list-mobile_cadysq.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666988802/recipe-box/recipe-box-menu1_cuptpi.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666988801/recipe-box/recipe-box-menu2_wqrfvu.png',
        }
];

const storefrontImages = [
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656854/storefront/storefront-home_ehzvr3.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656849/storefront/storefront-collection_ktqkfa.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656852/storefront/storefront-modal_zujfqb.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656836/storefront/storefront-cart_jnf6qo.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656836/storefront/storefront-checkout_agjrvv.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656850/storefront/storefront-home1-mobile_bgsegh.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656852/storefront/storefront-home2-mobile_fwq6tw.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656850/storefront/storefront-collection1-mobile_lhq1rp.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656849/storefront/storefront-collection2-mobile_j7jofp.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656853/storefront/storefront-modal-mobile_ue6hmj.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656838/storefront/storefront-cart-mobile_nmbjls.png',
        },
        {
                img: 'https://res.cloudinary.com/dyi8luau7/image/upload/v1666656836/storefront/storefront-checkout-mobile_spckgb.png',
        },
];



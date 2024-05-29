import React, { useRef } from 'react';
import './contact.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Contact = () => {
    const ref = useRef();
    const isInView = useInView(ref, { rootMargin: '-100px' });



    return (
        <motion.div
            ref={ref}
            className="contact"
            variants={variants}
            initial="initial"
            animate="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>subashaathi15@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>Pollachi, Coimbatore</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 7092802364</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div
                    className="phoneSVG"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="300px"
                        y="200px"
                        width="700px"
                        height="500px"
                        viewBox="0 0 122.88 122.267"
                        enableBackground="new 0 0 122.88 122.267"
                        xmlSpace="preserve"
                    >
                        <g>
                            <motion.path
                                strokeWidth={0.2}
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView && { pathLength: 1 }}
                                transition={{ duration: 3 }}
                                d="M33.822,50.291c4.137,7.442,8.898,14.604,15.074,21.133C55.1,
                                77.984,62.782,83.962,72.771,89.03l0.01,0.005l0.002-0.005c0.728,0.371,1.421,0.362,2.072,
                                0.118c0.944-0.353,1.927-1.137,2.883-2.086c0.729-0.726,1.643-1.924,2.631-3.223c3.846-5.054,
                                8.601-11.301,15.314-8.193c0.142,0.065,0.276,0.141,0.402,0.226l22.373,12.852c0.08,0.046,0.157,0.095,
                                0.23,0.147c2.966,2.036,4.177,5.172,4.19,8.683c0.014,3.621-1.329,7.674-3.274,11.101c-2.565,4.517-6.387,
                                7.502-10.761,9.525c-4.17,1.928-8.798,2.954-13.267,3.608c-6.989,1.025-13.578,0.374-20.288-1.692c-6.55-2.017-13.176-5.385-20.4-9.86l-0.526-0.326c-3.326-2.06-6.906-4.276-10.389-6.904C31.108,93.296,18.007,79.283,9.512,63.904C2.361,50.958-1.552,36.995,0.581,23.681C1.75,16.375,4.901,9.743,10.333,5.35c4.762-3.853,11.188-5.94,19.448-5.203c0.973,
                                0.084,1.793,0.639,2.255,1.419l0.006-0.003l14.324,24.27c2.11,2.718,2.344,5.415,1.203,8.096c-0.943,2.218-2.892,
                                4.251-5.476,6.168c-0.786,0.65-1.708,1.325-2.659,2.021C36.236,44.459,32.578,47.136,33.822,50.291L33.822,
                                50.291z M44.67,75.422C38.066,68.44,33.035,60.88,28.695,53.065c-0.076-0.123-0.144-0.253-0.202-0.39c-3.174-7.459,2.52-11.625,
                                7.493-15.262c0.845-0.618,1.663-1.217,2.401-1.829l0.002,0.003c0.043-0.036,0.088-0.071,0.135-0.105c1.843-1.354,3.171-2.647,3.678-3.837c0.289-0.679,0.182-1.426-0.466-2.265c-0.111-0.129-0.213-0.271-0.303-0.423L27.795,5.852c-5.869-0.241-10.419,1.321-13.784,4.044c-4.239,3.429-6.723,8.759-7.674,14.699c-1.905,11.894,1.716,24.594,8.292,36.5c8.078,14.623,20.575,27.977,32.864,37.25c3.379,2.55,6.776,4.653,9.932,6.607l0.526,0.326c6.818,4.223,13.017,7.386,19.052,9.244c5.876,1.809,11.634,2.38,17.729,1.486c4.009-0.587,8.113-1.485,11.668-3.129c3.351-1.55,6.248-3.785,8.134-7.104c1.496-2.637,2.53-5.653,2.521-8.222c-0.006-1.63-0.472-3.029-1.605-3.844L93.2,80.93c-2.461-1.081-5.629,3.081-8.193,6.45c-1.104,1.452-2.125,2.792-3.156,3.817c-1.477,1.466-3.118,2.723-4.962,3.411c-2.136,0.799-4.395,0.834-6.755-0.37l0.002-0.004C59.522,88.849,51.323,82.457,44.67,75.422L44.67,75.422z"
                            />
                        </g>
                    </svg>
                </motion.div>

                <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
                    <input type="text" required placeholder='Name..' />
                    <input type="email" required placeholder='Email..' />
                    <input type="phone" required placeholder='Phone..' />
                    <textarea rows={8} placeholder='Message'></textarea>
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
 
);
}

export default Contact

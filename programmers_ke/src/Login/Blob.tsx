import * as KUTE from 'kute.js'

function Blob() {
    const tween = KUTE.fromTo(
        '#blob1',
        { path: '#blob1' },
        { path: '#blob2' },
        { repeat: 999, duration: 3000, yoyo: true }
    )
    tween.start();
    return (
        <div>
            <svg
                width="700"
                height="700"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className='absolute top-0 left-0 z-20'
            >
                <defs>
                    <filter id="grain" x="-50vw" y="-50vh" width="100vw" height="100vh">
                        <feFlood flood-color="#ffffff" result="neutral-gray" />

                        <feTurbulence
                            in="neutral-gray"
                            type="fractalNoise"
                            baseFrequency="2.5"
                            numOctaves="100"
                            stitchTiles="stitch"
                            result="noise"
                        />

                        <feColorMatrix
                            in="noise"
                            type="saturate"
                            values="0"
                            result="destaturatedNoise"
                        ></feColorMatrix>

                        <feComponentTransfer in="desaturatedNoise" result="theNoise">
                            <feFuncA type="table" tableValues="0 0 0.5 0"></feFuncA>
                        </feComponentTransfer>

                        <feBlend
                            in="SourceGraphic"
                            in2="theNoise"
                            mode="soft-light"
                            result="noisy-image"
                        />
                    </filter>

                    <linearGradient
                        id="linearGradientId"
                        gradientTransform="rotate(120 0.5 0.5)"
                    >
                        <stop offset="0%" stop-color="#00ff55" />
                        <stop offset="100%" stop-color="#33ffff" />
                    </linearGradient>
                    <clipPath id="shape">
                        <path
                            fill="currentColor"
                            d="M777.5,641.5Q726,783,558,882.5Q390,982,308,807Q226,632,146,461.5Q66,291,227.5,153Q389,15,576.5,92Q764,169,796.5,334.5Q829,500,777.5,641.5Z"
                        ></path>
                    </clipPath>
                </defs>

                <g filter="url(#grain)" clip-path="url(#shape)">
                    <path
                        id="blob1"
                        fill="url(#linearGradientId)"
                        d="M777.5,641.5Q726,783,558,882.5Q390,982,308,807Q226,632,146,461.5Q66,291,227.5,153Q389,15,576.5,92Q764,169,796.5,334.5Q829,500,777.5,641.5Z"
                    />
                </g>
                <g filter="url(#grain)" clip-path="url(#shape)">
                    <path
                        id="blob2"
                        fill="url(#linearGradientId)"
                        d="M855.5,685Q795,870,595.5,913.5Q396,957,257,820.5Q118,684,93,488Q68,292,239,198Q410,104,605,114Q800,124,858,312Q916,500,855.5,685Z"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Blob;
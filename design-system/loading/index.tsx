import styled from "@emotion/styled"

const StyLoader = styled.div<{ $boxSize: number }>`
    position: absolute;
    top: calc(50% - ${(props) => props.$boxSize / 2}px);
    left: calc(50% - ${(props) => props.$boxSize / 2}px);
    width: ${(props) => props.$boxSize}px;
    height: ${(props) => props.$boxSize}px;
    border-radius: 50%;
    perspective: 800px;

    .inner {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .inner.one {
        left: 0%;
        top: 0%;
        animation: rotate-one 700ms linear infinite;
        border-bottom: 3px solid #b2f35f;
    }

    .inner.two {
        right: 0%;
        top: 0%;
        animation: rotate-two 700ms linear infinite;
        border-right: 3px solid #b2f35f;
    }

    .inner.three {
        right: 0%;
        bottom: 0%;
        animation: rotate-three 700ms linear infinite;
        border-top: 3px solid #b2f35f;
    }

    @keyframes rotate-one {
        0% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        }
    }

    @keyframes rotate-two {
        0% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
        }
    }

    @keyframes rotate-three {
        0% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
        }
        100% {
            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
        }
    }
`

interface Props {
    boxSize: number
}
const Loading = ({ boxSize }: Props) => {
    return (
        <StyLoader $boxSize={boxSize}>
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
        </StyLoader>
    )
}

export default Loading

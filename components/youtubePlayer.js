import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
// import {Box} from "@/chakra-ui/react";

// export const player = styled.div`
//     position: relative;
//     padding-top: 56.25%;
// `

const YoutubeVideoPlayer = (props) => {
    const {id, playing} = props;

    const url = `https://www.youtube.com/watch?v=${id}`
    return(
        <div>
            <div>
                <ReactPlayer 
                className="react-player" 
                url={url} 
                playing={playing} 
                width="100%" 
                height="500px"/>
            </div>
        </div>
    )
}

export {YoutubeVideoPlayer}
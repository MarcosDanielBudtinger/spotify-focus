import { Card } from "react-bootstrap";
import './MusicCard';
import { BsPlay, BsSkipStartFill, BsSkipEndFill, BsSkipBackwardFill, BsSkipForwardFill } from "react-icons/bs";

interface CardProps {
    name: string;
    imgUrl: string
}

export function MusicCard(props: CardProps) {
    return (
        <Card>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
            <Card.Footer className="text-center">
                <BsSkipBackwardFill />
                <BsSkipStartFill />
                <BsPlay />
                <BsSkipEndFill />
                <BsSkipForwardFill />
            </Card.Footer>
        </Card>
    );
}

import { CSSProperties, useEffect, useRef, useState } from "react";
import { useWindowEventListener } from "./StayStuck/utils.events";
import { debug, renderObject } from "../utils/debug";
import { Code } from "../components/atoms/Code";

interface Props {
    children: React.ReactNode;
    parent: React.MutableRefObject<HTMLDivElement | null>
}

interface StorePositionContext {
    window: {
        scrollY: number;
        scrollX: number;
        height: number;
        width: number;
    };
    parent: {
        offsetX: number;
        offsetY: number;
        height: number;
        width: number;
    };
    self: {
        height: number;
        width: number;
    }
}

const updateStore = (parent: HTMLDivElement | null): StorePositionContext => ({
    window: {
        height: document.body.clientHeight,
        width: document.body.clientWidth,
        scrollY: window.scrollY,
        scrollX: window.scrollX,
    },
    parent: {
        height: parent?.offsetHeight ?? 0,
        width: parent?.offsetWidth ?? 0,
        offsetX: parent?.offsetLeft ?? 0,
        offsetY: parent?.offsetTop ?? 0,
    },
    self: {
        height: parent?.offsetHeight ?? 0,
        width: parent?.offsetWidth ?? 0,
    }
})

const newPosition = (store: StorePositionContext): CSSProperties => ({
    position: 'fixed',
    top: store.parent.offsetY - store.window.scrollY,
})


export const StayStuck: React.FC<Props> = (props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const parent = props.parent;
    const parentElement = parent?.current;

    const [store, setStore] = useState<StorePositionContext>(updateStore(parentElement));
   

    useWindowEventListener('scroll', () => {
        console.log(parentElement)
        setStore(updateStore(parentElement));
    });

    useWindowEventListener('resize', () => {
        console.log(parentElement)
        setStore(updateStore(parentElement));
    });

    useEffect(() => {
        console.log(parentElement)
        setStore(updateStore(parentElement));
    }, [parentElement]);

  return (
    <div ref={ref} style={newPosition(store)}>
        {debug(<Code>{renderObject(store)}</Code>)}
        {props.children}
    </div>
  );
}
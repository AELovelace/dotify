"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import {cn} from "@/lib/utils";

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
        )}
        {...props}
    >
        <SliderPrimitive.Track className="slider-track relative cursor-pointer h-1 w-full grow overflow-hidden rounded-full bg-neutral-700">
            <SliderPrimitive.Range className="absolute h-full bg-white" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="slider-thumb block h-4 w-4 rounded-full border-2 border-white bg-neutral-900 hover:bg-neutral-700 ring-offset-background transition-colors duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-grab active:cursor-grabbing" />
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export {Slider};

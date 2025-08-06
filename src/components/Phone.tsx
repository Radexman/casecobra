import Image from 'next/image';
import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string;
    dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
    return (
        <div
            className={cn(
                'pointer-events-none relative z-50 overflow-hidden',
                className
            )}
            {...props}
        >
            <Image
                src={
                    dark
                        ? '/phone-template-dark-edges.png'
                        : '/phone-template-white-edges.png'
                }
                alt="phone case"
                className="pointer-events-none z-50 select-none"
                width={300}
                height={200}
            />
            <div className="absolute inset-0 -z-10">
                <Image
                    src={imgSrc}
                    alt="overlaying phone image"
                    className="object-cover"
                    width={300}
                    height={200}
                />
            </div>
        </div>
    );
};

export default Phone;

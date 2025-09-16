import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import React from "react";
import {
  MediaViewer,
  ImageViewer,
  VideoViewer,
} from "@/components/media-viewer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AuthorCard } from "@/components/author-card";
import { getAuthor, type AuthorKey } from "@/lib/authors";
import { CopyHeader } from "@/components/copy-header";

type IFrameProps = React.IframeHTMLAttributes<HTMLIFrameElement> & {
  // Normalize common lowercase HTML attrs coming from raw MDX
  allowfullscreen?: boolean | "";
  frameborder?: number | string;
};

function IFrame(props: IFrameProps) {
  const {
    className,
    style,
    width,
    height,
    allow,
    referrerPolicy,
    loading = "lazy",
    // React-cased props (preferred)
    allowFullScreen,
    frameBorder,
    // Lowercase props as they may appear in MDX
    allowfullscreen,
    frameborder,
    ...rest
  } = props;

  // Compute normalized props
  const normalizedAllowFullScreen =
    allowFullScreen ?? (allowfullscreen !== undefined ? true : undefined);
  const normalizedFrameBorder = frameBorder ?? frameborder;

  // Remove lowercase props from being passed through to DOM
  const { allowfullscreen: _af, frameborder: _fb, ...cleanRest } = rest as any;

  return (
    <iframe
      className={className}
      style={style}
      width={width}
      height={height}
      allow={allow}
      loading={loading}
      referrerPolicy={referrerPolicy}
      frameBorder={normalizedFrameBorder}
      allowFullScreen={normalizedAllowFullScreen}
      {...cleanRest}
    />
  );
}

const createHeading = (level: number) => {
  const Heading = ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return <CopyHeader level={level} {...props}>{children}</CopyHeader>;
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
};

interface AuthorProps {
  id: AuthorKey;
}

function Author({ id }: AuthorProps) {
  const author = getAuthor(id);
  return <AuthorCard author={author} className="my-8" />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    iframe: IFrame,
    MediaViewer,
    ImageViewer,
    VideoViewer,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Author,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    ...components,
  };
}

export const useMDXComponents = getMDXComponents;

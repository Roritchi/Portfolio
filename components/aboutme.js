import NextLink from 'next/link'
import { Link, Text } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { useRouter } from "next/router"

import aboutMe from './AboutMe.md'
import enUSaboutMe from './AboutMe.en-US.md'

export default function AboutMe() {
    const { locale, locales, defaultLocale } = useRouter();

    return (
        <ReactMarkdown>{{
            'de-DE': aboutMe,
            'en-US': enUSaboutMe,
        }[locale]}</ReactMarkdown>
    )
}

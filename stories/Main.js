import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('FullHeader', module)
    .add('with title', () => (
        <FullHeader title="TDD" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="Curso de JavaScript com TDD na prática." />
    ))
    .add('with title, subtitle, bgColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JavaScript com TDD na prática."
            bgColor="#3299BB"/>
    ))
    .add('with title, subtitle, bgColor, textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JavaScript com TDD na prática."
            bgColor="#3299BB"
            textColor="#FF990"/>
    ))
    .add('with title, subtitle, bgColor, textColor, font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JavaScript com TDD na prática."
            bgColor="#3299BB"
            textColor="#FF990"
            font="cursive"/>
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JavaScript com TDD na prática."
            bgColor="#3299BB"
            textColor="#FF990"
            bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"/>
    ))
    .add('with title, subtitle, video', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JavaScript com TDD na prática."
            bgColor="#3299BB"
            textColor="#FF990"
            video="http://teragigame.ga/files/madcowfilms.webm"/>
    ))


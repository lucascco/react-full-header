import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have  h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD"/>);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should no have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader/>);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag with title when title is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD"/>);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="Curso de JS com TDD na Pratica"/>);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should no have h2 tag when subtitle is not passed', () => {
            const wrapper = shallow(<FullHeader title="TDD"/>);
            expect(wrapper.find('h2')).to.have.length(0);
        });


        it('should have h2 tag with title when subtitle is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" subtitle="Curso de JS com TDD na Pratica"/>);
            expect(wrapper.find('h2').props().children).to.be.equal('Curso de JS com TDD na Pratica');
        });
    });

    context('bgColor', () => {
        it('should have background-color #ccc when is not passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-color', '#ccc');
        });

        it('should have background-color #000 when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#000" />);
            expect(wrapper).to.have.style('background-color', '#000');
        });
    });

    context('textColor', () => {
        it('should have color #fff when is not passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('color', '#fff');
        });

        it('should have color #ff000 when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" textColor="#ff000" />);
            expect(wrapper).to.have.style('color', '#ff000');
        });
    });

    context('font', () => {
        it('should have font sans-serif when is not passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('font-family', 'sans-serif');
        });

        it('should have font open-sans when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" font="open-sans" />);
            expect(wrapper).to.have.style('font-family', 'open-sans');
        });
    });

    context('bgImg', () => {
        it('should have background-image empty when is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-image', 'url()');
        });

        it('should have background-image bgImg.jpeg when is passed', () => {
            const wrapper = shallow(<FullHeader bgImg="bgImg.jpeg" />);
            expect(wrapper).to.have.style('background-image', 'url(bgImg.jpeg)');
        });
    });

    context('video', () => {
        it('should have a tag video when video passed', () => {
            const wrapper = shallow(<FullHeader video="video.mp4"/>);
            expect(wrapper.find('video')).to.have.length(1);
        });

        it('should dont have a tag video when none passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.length(0);
        });

        it('should have source when video passed', () => {
            const wrapper = shallow(<FullHeader video="video.mp4"/>);
            expect(wrapper.find('video').props().src).to.be.equal('video.mp4');
        });
    });
});

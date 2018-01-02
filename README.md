
## Full Stack Labs: MobX Demonstration
This repro holds example code for a meetup with [Reacto: The Sacramento React Meetup Group](https://www.meetup.com/Sacramento-ReactJS-Meetup/events/243936126/)

This class is hosted by [Full Stack Labs](https://www.fullstacklabs.co/)


## Introduction
Just as React is a 'reactive' view layer, so MobX is a reactive model layer.

Imagine a spreadsheet: You may have many data cells and formula cells that provide a sum, an average, charts, etc. Yet when you change one number, everything updates automatically to show the correct results. You don't have to write reducers, or manage messages, or worry about immutable state. You just set a variable and everything updates automatically. This "just set the variable" simplicity is the core of programming with MobX. No one is tempted to write bad data models because the correct way to write a model also becomes the easiest way to handle a model. This enables a very productive coding environment where things "just work".

## Agenda

- Review a MobX web app created from scratch
- Build the minimum possible example of a component using MobX
- Discuss the concepts of @observable, @computed and @action to see how they enable a stronger separation of model and view
- Handle inter-component communication and async service calls using a shared data store
- Explore a production code base handling many hundreds of inter-connected model objects

This is a beginner level class with an optional exploration of production code at the end. Familiarity with ES6 javascript syntax may be helpful but is not required. 

If you would like to follow along, please clone this repo to your laptop and play with the code as we talk through it.



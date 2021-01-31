---
layout: lecture
title: The Charlie Card Problem
permalink: /Activities/Activity2.2/CharlieCard
parent: /Activities/Activity2.2
---

# The Charlie Card Problem

## General Task

Your task is to design a set of classes to represent the behavior that is supported by CharlieCard vending machines, and to document them with CRC cards.

For the purposes of this task your CRC card should include the following information:
* the name of the class
* the responsibility of the class.  This will typically be something of the form "Represents an XXX", where XXX is something in the real world
* the state maintained by objects of the class, again in terms of real world things
* Collaborators: for the purpose of this task, list all the classes on which an object of this class directly depends, either at the time the object is constructed or during the lifetime of the object.

Design classes for each kind of Charlie Card, and for any other objects you need to model the fare system.

You can deliver this in any format you like.  When you are done, drop your solution in the student Slack in channel #section-wand. Make sure you put your room number and ALL of your names on the document.

## The Application

CharlieCard machines are the vending machines that sell transit tickets in Boston; if you are not familiar with these exact machines, the problem is applicable to other mass transit systems. 

Your vending machine sells the following kinds of fares:

	* Time-based passes - passes with a time-based validity period (daily, weekly and monthly) tickets that are good for unlimited rides within their validity period. The expiration date of a time-based pass is calculated from the first time that the pass is actually used to charge a ride --- a 7-day pass sold today but not used for a month will be valid for 7 days from the first day that it is used.
	* Value-based passes - passes with a pre-loaded balance (in US Dollars) that are good for a set number of rides based on the cost of the ride and the amount loaded onto the pass. For instance, a pass might be loaded with $20. Assume that each ride costs the same flat fare ($2.40).

When riders purchase a pass, they have the choice to load that pass onto a physical card that they already have ("reload" it), or select to have a new physical card issued for the pass. There are two physical card options:

	* CharlieCard - a reusable plastic card that is desigend to be re-used for years. Your vending machine can reload CharlieCards that riders already have in their possession, but can not issue new cards.
	* CharlieTicket - a paper ticket that is not as physically durable as the CharlieCard, but can nonetheless be reloaded. Your vending machine can issue new CharlieTickets and reload existing CharlieTickets.

You do not need to worry about other peculiar details of Boston's transit system (e.g. the distinction of the commuter rail or ferry from the rest of the system, within-system transfers, or discounts based on disability or age).



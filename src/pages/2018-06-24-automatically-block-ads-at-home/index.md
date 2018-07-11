---
path: '/automatically-block-ads-at-home'
title: 'Automatically Block Ads on Every Device in Your Home'
published: false
date: 2018-06-24
description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, an'
image: 'data-usage.png'
imageDescription: 'Data usage graph for irl road trip stream'
---

[//]: # 'Image of project fi usage data'

We all hate ads. They are the dirty price we pay to enjoy our favorite free sites. This is why we use an Ad Blocker. Maybe uBlock? It's easy enough to put an ad blocker on my PC, I've been doing it for years. But what about my fianc&#233;e's PC? Or our laptops? And our phones, tablets, xbox, and any other random device we seem to keep acquiring?

There's gotta be a better solution than to install 10 different ad blockers. And there is, it's called Pi-Hole, and it's amazing. This post will cover everything you need to know about how to automatically block ads on all of your devices at home.

# Technical Details

The following sections contain technical information about how and why all of this works. Feel free to skip this if you just want to set up your Pi-Hole.

- What We Need
- How Ads Work on the Web

## What We Need

Instead of having each device block ads, we need a way to block them at a higher level in the network chain. Specifically, we can use a custom DNS to block all requests that ads.

## How Ads Work on the Web

1.  We go to a web page, which downloads an HTML file
2.  That file contains ads
3.  Our browser makes additional requests for the ads
4.  Once those requests are finished, the browser displays them in the page

Image of Chrome dev tools network tab of ads requests.

Doing all of this will increase page load times.

# Set Up

1.  Set Up Raspberry Pi
2.  Set Up Pi-Hole
3.  Test

To be continuued...

In a future post I will be exploring the feasability of blocking all ads when outside the home on a mobile network. See you then!

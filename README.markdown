# Fluid Grid System

A web grid system designed by [Joseph Silvashy](http://twitter.com/jpsilvashy "Joseph Silvashy") and New Gold Leaf that allows designers to use the screen real estate on large monitors and retain great design on smaller ones. The Fluid Grid System combines the principals of the typographic grid and a baseline grid into one resolution-independent framework.

## How to use the Fluid Grid System
To the following code is an example of how the code works. Because The Fluid Grid System is based on a six column grid the only necessary provision is that all of the `<div class="three column">` within it’s parent `<div class="section">` element add up to 6. A total of 720 different combinations can be achieved in this fashion.

    <div class="six_column section">
      <div class="two column">
        <div class="column_content">
          ...
        </div>
      </div>
      <div class="three column">
        <div class="column_content">
          ...
        </div>
      </div>
      <div class="one column">
        <div class="column_content">
          ...
        </div>
      </div>
    </div>

The code for the Fluid Grid System is simple, lightweight, and non-obtrusive. The following is a sample of an empty three column layout with columns of varying width.

## Credit and Inspiration
Many of the ideas that have inspired me to build the Fluid Grid System is from some long-time geniuses of the web world including Nathan Smith for the original web grid system the 960 grid system, also Andy Clarke, Jon Hicks, Shaun Inman, Cameron Moll, Jason Santa Maria, David Heinemeier Hansson, Sam Ruby, John Resig, Mark Bolton, Khoi Vinh, John Maeda, and Ryan Sims to name only a few.

## Attributions
Modifications and fixes made from:
*   [Eric Meyer's original "Reset CSS"](http://meyerweb.com/eric/tools/css/reset/ "Eric Meyer's original 'Reset CSS'")
*   [Blue Print CSS](http://code.google.com/p/blueprintcss/ "Blue Print CSS")

## License
Copyright (c) 2010 Joseph Silvashy and New Gold Leaf LP
Licensed under the MIT and GPL licenses.

Date: 2010-02-05 (Fri, 05 Feb 2010)
Version: 0.4.0


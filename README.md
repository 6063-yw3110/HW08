# Week 08

### Sound Files
basic sketches
[![1.md.jpg](https://imgpile.com/images/GISAC3.md.jpg)](https://imgpile.com/i/GISAC3)
[![2.md.jpg](https://imgpile.com/images/GISLVl.md.jpg)](https://imgpile.com/i/GISLVl)
I did a similar exercise like this about a long time ago, and I've forgotten a lot of it, but I still have the basic idea.

This time I chose one of my very favorite songs, this music is very grand I love it. The title of the song is #dry flower#, so I put a flower behind it as a background. Because this song gives me a mournful feeling, I wanted to make some visualizations that are not so exciting. 

I've done music player-like visualizations before, but this song didn't fit. I decided almost immediately that I wanted to do a rain-like effect, with different rects () changing their size and position as I analyzed the music amplitude coming up

One special thing that came up when I didn't add black to the background was this effect that I wasn't expecting, not what I was expecting but it looks nice, happy accident occured?
[![tried.png](https://imgpile.com/images/GISQuk.md.png)](https://imgpile.com/i/GISQuk)

I enjoyed this exercise a lot!

### Samples (picture)
This one was really hard too, it took me a long time to finish it, but still I feel like it's missing something. i tried my best with this result
[![sketch.jpg](https://imgpile.com/images/GIjXml.md.jpg)](https://imgpile.com/i/GIjXml)

The final part of isSmiliar took me a while to understand, but I realized that I needed to compare the absolute value of the difference between the two, and that I needed to have a specified threshold. If the difference between the red, green, and blue components is less than this threshold, then the function returns true, proving that the colors are similar. The similarities will be recognized and replaced!


I detects whether the color of each pixel is similar to the colors red, yellow, and blue by iterating over each pixel of the image and then using the isSimilar(). 

I detect the colors and change into new colors I type in the color numbers randomly

I think the code will try to replace the colors red, yellow, and blue according to the similarity threshold. The result will depend on the color distribution and similarity threshold of the loaded image.

 If the red, yellow and blue colors in different Mondrian paintings are very similar to your predefined colors then they will be replaced with the color range I selected. If the similarity threshold is high, the colors will be replaced only if they are very close to your predefined colors. Of course depending on the color, I think different results will occur.
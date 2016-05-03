title: Response on Chapter 11 of the VAD book by Tamara Munzner
date: 2016-05-03 09:51:21
categories:
- Computer Science
- Data Visualization
tags:
- Assignments
- Reviews
---

Chapter 11 started the discussion about manipulations. Especially changing view over time.

After going through the chapter, I'm a little curious about the difference on __visual encoding__ and __potential impact on users__ between __cut__ and __slice__ in terms of reducing attributes.

The first question is easy to answer. A cut put a plane that divides the viewing volume into two and hiding the part that is close to the camera. And slice is just filtering data by one specific value. Slice is more general in terms of filtering, and cut can be made into a slice if the camera (in 3D case) is put deliberately to only show the plane cut.

After figuring out the difference of two visual encodings, now we can discuss on what impact those two manipulation will have on the users. The main attribute that sets cut apart from slice is that it could leave more information. Just like the brain example in the book, users are still be able to see the facial part of the head. This could potentially carry more useful information, e.g. how can the subject's facial expression change according to brain activity. Or it could be simply more engaging for users to look at especially those are not professional. The downside of this is that we are consuming more memory, and if a slice would work if we want to get rid of noise or memory consumption is a concern.

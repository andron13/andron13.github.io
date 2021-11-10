#!/bin/bash

for i in {2..18}

do
  touch $i-exercises-html.md
  echo "---
bookCollapseSection: true
weight: 1
title: $i - html основы
description: Задачи на основы HTML
type: book
---
# Задача № $i

## Название задачи


### Assets" >> $i-exercises-html.md
done

#  mkdir ./lesson-$i
#  mkdir ./lesson-$i/homework
#  touch ./lesson-$i/homework-task.md
#  echo "Hello Magic Programming $i" >> ./lesson-$i/homework-task.md
#  echo "lesson-"$i
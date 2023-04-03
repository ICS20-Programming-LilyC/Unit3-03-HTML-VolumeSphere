// Copyright (c) 2022 Lily C All rights reserved
//
// Created by: Lily C
// Created on: 04/03/2023
// This file contains the JS functions for index.html

"use strict"

function functionCalculate() {
  let radiusSphere = parseFloat(document.getElementById("radius").value);
  const pi = Math.PI;
  let volume = radiusSphere ** 3 * pi * 4 / 3;
  document.getElementById("display-results").innerHTML = "The volume of the sphere is " + volume.toFixed(2) + " cm.";
}
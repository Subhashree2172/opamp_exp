## Operational Amplifier IC 741

<p align="center">
<img width="400" height="300" alt= "Op-Amp" src="https://firebasestorage.googleapis.com/v0/b/vlab-29a0a.appspot.com/o/vlab1%2Fop-amp.png?alt=media&token=a8917aad-7706-4995-883f-a7770375e3a4">
</p>

 - IC 741  is a monolithic IC, comprising of a general purpose Operational Amplifier.
 - It has 7 functional pins, 4 pins capable of taking input and 1 pin for output . The Op-Amp is a 'Linear Amplifier' with an enormous variety of uses.
 - The Op-Amp has inverting ( - ) and non-inverting (+) inputs, and an output at pin 6.
 - In a circuit, the IC can be used  in two ways.
 - For inverting amplifier ,  the voltage goes into pin two.
 - For non-inverting amplifier , the voltage goes into pin three.
 - Here , we are going to see the use of Op - Amp as a summer and a subtractor.

<p align="center">
<img width="400" height="300" alt= "Op-Amp-Graph" src="https://firebasestorage.googleapis.com/v0/b/vlab-29a0a.appspot.com/o/vlab1%2Fgraph.png?alt=media&token=c2a90117-47f4-4321-8b84-9d9f60685f95">
</p>

<p align="center">Citation : From Opamp - Operational Amplifier By electroSome</p>

## Summing Amplifier

 - The Summing Amplifier is a type of Op - Amp circuit configuration .
 - It is used to add all the voltages present on two or more inputs to get a single summing output voltage.
 - If we add more input resistors to the input, each equal in value to the original input resistor, (Rin) we end up with an operational amplifier circuit called a Summing Amplifier
 - In this Summing Circuit, the output voltage, ( Vout ) now becomes proportional to the sum of the input voltages, V1, V2, V3, etc.
 - The resistors could be chosen according to our design requirement of summing amplifier wherein the output is proportional to the amplified sum of all inputs.
 - The current is calculated as , If = I1 + I2 + I3 = -[ V1/Rin + V2/Rin + V3/Rin ]


<p align="center">
<img width="400" height="300" alt= "Summer" src="https://firebasestorage.googleapis.com/v0/b/vlab-29a0a.appspot.com/o/vlab1%2Fsumming_amplifier.png?alt=media&token=9b939f71-11be-4789-a3f0-ba96b5589c1e">
</p>

<p align="center">Citation : From Inverting and Non Inverting Summing Amplifier - Voltage Adder By Electronics Hub</p>

### Inverting Equation

 -       -Rf/ Rin ( Vin )
 -       => -Vout = Rf/Rin *V1 + Rf/Rin *V2 + Rf/Rin *V3

### Summing Amplifier Equation :

 -       -Vout = Rf/ Rin (V1 + V2 + V3 +  .. )
 -        If  Rf = Rin,  -Vout = (V1 + V2 = V3 + … )
 -        => Vout = -(V1 + V2 + V3 + … )


## Applications Of Summing Amplifier

 - Allows audio experts to combine signals from various channels.
 - Every audio input can be configured independently without affecting the output.
 - Used in digital to analog converter.

## Advantages Of Summing Amplifier

 - The summing point is virtually at earth potential .Hence , the signals from each different channel do not affect each other.
 - Each channel can be summed or mixed regardless of the signal level and source impedance .

## Disadvantages Of Summing Amplifier

 - If you disconnect one of the inputs,it doubles the gain of the circuit  for the remaining channel which is connected . But in inverting summing amplifier ,  it generates a virtual earth summing point



## Differential Amplifier

<p align="center">
<img width="400" height="300" alt= "Subtractor" src="https://firebasestorage.googleapis.com/v0/b/vlab-29a0a.appspot.com/o/vlab1%2Fsubtractor_ampifier.png?alt=media&token=d9d3f95d-c2d4-4eb1-b509-3cd7ea30a836">
</p>

<p align="center">Citation : From Differential Amplifier By Wikipedia</p>


  - The differential amplifier amplifies the difference in voltage , which is present on its inverting and non-inverting inputs.
  - All Op-Amps are “Differential Amplifiers" , because of their input configuration.
  - By connecting a voltage signal onto an input terminal and another voltage signal onto  other input terminal  , the resultant will be directly proportional to the difference between the two input voltages  , V1 and V2.
  - By connecting the inputs to make 0v ground, superposition can be used to solve for the output voltage Vout.

  - The transfer function of a subtractor is given as:
  - I1 = (V1 - Va) / R1 , I2 = (V2 - Vb) / R2 , If = (Va - Vout) / R3

  - Summing point , Va = Vb and Vb = V2 * (R4) / (R2 + R4)
  - If V2 = 0, then Vout(a) = -V1 * (R3/R1)
  - If V1 = 0, then Vout(b) =  V2 * (R4) / (R2 + R4) * (R1 + R3) / (R1)

  - Vout = -Vout(a) + Vout(b)

### Differential Amplifier Equation :

  - Vout = R3/R1 * ( V2 - V1)
  - If R3 = R1 , then Vout = V2 - V1

## Applications Of Differential Amplifier

  - Used in series negative feedback circuit.
  - Used as a volume control circuit.
  - Used as an automatic gain control circuit.


## Advantages Of Differential Amplifier

   - Manipulates differential signals.
   - Provide immunity to external noise, a 6-dB increase in dynamic range, which gives a clear advantage for low-voltage systems .
   - They reduce second-order harmonics.

## Disadvantages Of Differential Amplifier

  - Complexity is the main drawback of Differential Amplifier.
  - To make a balanced differential amplifier,we need atleast two differential amplifiers ,  using a configuration known as a long-tailed pair.
  - In practice, you need more components to further amplify the output,with provide biasing and so on.

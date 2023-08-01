# React State Management Benchmark
This small benchmark application is created to compare 3 state management libraries for React 
1. Recoil
1. Redux
1. Zustand

## Test scenario
1. Use chrome developer to check heap memory usage (click snapshot record)
1. Click on "Create" button will add 10000 objects to the state manager.
1. Click "Delete All" to call state manager to deallocate / reset the state.
1. Repeat step 1. Then, compare the memory usage

## Observation (1 Aug 2023)
1. Recoil suffers from memory leaks on both atom and atomFamily implementation. Changes in atom's value results in reallocation of memory. New block of memory is used anytime when the state is update.
1. Redux doesn't release memory immediately but after few seconds memory usages get back to original level. When running Create object for 100 times, it shows a small sign of leakage.
1. Zustand doesn't leak at all in any moment but **explicit delete obj[key]** is needed to make delete all work. No leakage even when running 100 times.
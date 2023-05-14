import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Directory from "../components/directory/directory";

const ComponentPreviews = () => {
   return (
      <Previews palette={<PaletteTree/>}>
         <ComponentPreview path="/Directory">
            <Directory/>
         </ComponentPreview>
      </Previews>
   );
};

export default ComponentPreviews;
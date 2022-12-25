import { forwardRef } from 'react';
import type { Props } from 'react-select';
import ReactSelect from 'react-select';

import { selectStyles } from './select.styles';

type Ref = any;

const Select = forwardRef<Ref, Props>((props, ref) => (
  <ReactSelect ref={ref} styles={selectStyles} {...props} />
));

Select.displayName = 'Select';
export default Select;

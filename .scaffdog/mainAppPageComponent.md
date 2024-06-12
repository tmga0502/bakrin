---
name: 'mainAppPageComponent'
root: './resources/ts/components/pages/mainApp/'
output: '**/*'
ignore: []
questions:
  value: 'Please enter  file name.'
---

# `{{ inputs.value }}/{{ inputs.value }}.tsx`

```markdown
import {MainAppLayout} from "@/ts/components/ui/layout";
import {PageTitle} from "@/ts/components/ui/title/Title";

const {{ inputs.value }}Page = () => {
	return (
	  <MainAppLayout>
		<PageTitle en={''} jp={''}/>
	  </MainAppLayout>
	);
};

export default {{ inputs.value }}Page;
```

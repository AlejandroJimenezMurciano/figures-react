import Rhombus from '../rhombus/Rhombus';
import Triangle from '../triangle/Triangle';
import Square from '../square/Square';
import Circle from '../circle/Circle';
import { Div } from './styles';

const Container = () => {
	return (
		<Div>
			<Square />
			<Circle />
			<Triangle />
			<Rhombus />
		</Div>
	);
};

export default Container;

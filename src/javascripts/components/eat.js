// import utils from '../helpers/utils';
import quad from './quadrant';

const makeQuad = () => quad.createQuadrant('eat', 100, 'fas fa-seedling', 'healthy food', 'fas fa-candy-cane', 'unhealthy food');

// <i class="fas fa-candy-cane"></i>
// <i class="fas fa-seedling"></i>

export default { makeQuad };
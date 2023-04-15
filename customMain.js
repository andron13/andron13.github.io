// Banner Variables
const startAnimationDelay = 0.1; // sec

const animationFunction = () => {
  return gsap
    .timeline()
    .delay(startAnimationDelay)

    // Labels and delays in seconds
    .addLabel('startFrame1', 0.1)
    .addLabel('startFrame2', 8)

    // Frame 1
    .to('.banner', {opacity: 1, ease: 'none', duration: 0.5}, 'startFrame1')
    .to('.frame', {opacity: 1, ease: 'none', duration: 0.5}, 'startFrame1')
    .to('.blue-line', {width: "calc(100% - 20px)", ease: 'none', duration: 1})
    .to('.frame-01', {backgroundColor: '#ecd20b', ease: 'none', duration: 0.5}, 'text')
    .to('.text-01', {opacity: 1, ease: 'none', duration: 1}, 'text')
    .to('.text-02', {opacity: 1, ease: 'none', duration: 1}, 'text+=1')
    .to('.text-03', {opacity: 1, ease: 'none', duration: 1}, 'text+=2')
    .to('.text-03', {color: 'red', ease: 'none', duration: 1})
    .to('.text-04', {opacity: 1, ease: 'none', duration: 1})

    // Frame 2
    .to('.frame-01', {left: -160, ease: 'none', duration: 1}, 'startFrame2')
    .to('.frame-02', {left: 0, ease: 'none', duration: 1}, 'startFrame2')
    .to('.text-05', {transform: 'rotate3d(0, 0, 1, 179deg)', ease: 'none', duration: 1})
    .to('.text-05', {transform: 'rotate3d(0, 0, 1, 181deg)', ease: 'none', duration: 0.01})
    .to('.text-05', {transform: 'rotate3d(0, 0, 1, 0deg)', ease: 'none', duration: 1})
};

window.onload = animationFunction();

const url = 'http://www.youtube.com/channel/UCop5lg-NiMHEZJWq26C8znA?sub_confirmation=1&amp;feature=subscribe-embed-click';

function openNewWindow() {
  window.open(url, '_blank');
}

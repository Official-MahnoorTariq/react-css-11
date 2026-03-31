export default function Snake(){
  return(
    <>
    <svg class="overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line class="ladder-rung" x1="55" y1="95" x2="55" y2="75" />
        <line class="ladder-rail" x1="53.5" y1="95" x2="53.5" y2="75" />
        <line class="ladder-rail" x1="56.5" y1="95" x2="56.5" y2="75" />

        <line class="ladder-rung" x1="15" y1="85" x2="25" y2="65" />
        <line class="ladder-rail" x1="13" y1="86" x2="23" y2="66" />
        <line class="ladder-rail" x1="17" y1="84" x2="27" y2="64" />

        <line class="ladder-rung" x1="85" y1="45" x2="95" y2="25" />
        <line class="ladder-rail" x1="83" y1="46" x2="93" y2="26" />
        <line class="ladder-rail" x1="87" y1="44" x2="97" y2="24" />

        <line class="ladder-rung" x1="35" y1="45" x2="25" y2="15" />
        <line class="ladder-rail" x1="33" y1="46" x2="23" y2="16" />
        <line class="ladder-rail" x1="37" y1="44" x2="27" y2="14" />

        <path class="snake-body" d="M 65 55 Q 80 65 75 80 T 85 95" />
        <circle class="snake-head" cx="65" cy="55" r="1.8" />
        <circle class="snake-eye" cx="64.2" cy="54.2" r="0.4" />

        <path class="snake-body" d="M 15 35 Q 0 45 15 55 T 5 65" />
        <circle class="snake-head" cx="15" cy="35" r="1.8" />
        <circle class="snake-eye" cx="14.2" cy="34.2" r="0.4" />

        <path class="snake-body" d="M 45 5 Q 60 15 45 20 T 55 25" />
        <circle class="snake-head" cx="45" cy="5" r="1.8" />
        <circle class="snake-eye" cx="44.2" cy="4.2" r="0.4" />
    </svg>

    </>
  );

}
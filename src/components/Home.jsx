import "./home.css";
import React from "react";

function Home() {
  return (
    <div id="home">
      <div className="special-offers-container">
        <div className="special-offer">
          <h2>Refreshing Summer Bonanza: </h2>
          <p>
            As the mercury rises, cool off with our 'Summer Splash' collection –
            a vibrant assortment of tropical flavors at a 20% discount. From the
            zesty 'Citrus Surge' to the exotic 'Dragon Watermelon Burst', let
            these flavors be your summer escapade!
          </p>
        </div>
        <div className="special-offer">
          <h2>First-Time Buyer Special: </h2>
          <p>
            New to Iceberg Kampot? We welcome you with open arms and a special
            15% discount on your first purchase. Use code "ICEBERGNEW" at
            checkout and embark on your journey of taste and vitality.
          </p>
        </div>
        <div className="special-offer">
          <h2>Loyalty Rewarded: </h2>
          <p>
            Our repeat customers are the pillars of our success. Enjoy a 'Buy 5,
            Get 1 Free' offer on all our juice ranges. It's our way of saying
            thank you for your continued patronage.
          </p>
        </div>
        <div className="special-offer">
          <h2>Family Pack Fiesta: </h2>
          <p>
            Embrace healthy living for the whole family with our Family Pack
            Fiesta. Purchase any family pack and receive a complimentary set of
            eco-friendly straws and a recipe booklet for creating your own juice
            blends at home.
          </p>
        </div>
        <div className="special-offer">
          <h2>Referral Rewards: </h2>
          <p>
            Spread the joy of health! Refer a friend and both of you can enjoy a
            10% discount on your next purchase. It's a win-win for health and
            friendship.
          </p>
        </div>
      </div>
      <div className="desc-container">
        <h1 className="home-title">Iceberg Kampot</h1>
        <hr />
        <p className="juice-desc">
          "Iceberg Kampot," a burgeoning juice factory that prides itself on
          being at the heart of Cambodia's famed Kampot region. This factory has
          rapidly gained a reputation for producing some of the most refreshing
          and high-quality juices, which has not only captivated a large
          customer base within Cambodia but has also extended its reach across
          borders to neighboring countries such as Vietnam, Thailand, and Laos.
          The growth of "Iceberg Kampot" is a testament to its commitment to
          quality and customer satisfaction. Reflecting modern trends and the
          needs of its diverse clientele, the factory has embraced technological
          advancements, offering the convenience of online payments. This
          feature ensures that a sip of their natural goodness is just a few
          clicks away, no matter where you are. Whether you're a local or
          international customer, the "Home" component invites you to explore
          "Iceberg Kampot's" offerings and experience the ease of bringing a
          taste of Cambodia right to your doorstep.
        </p>
      </div>
    </div>
  );
}

export default Home;

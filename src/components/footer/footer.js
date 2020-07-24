import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>

        <div>
          <aside>
            <h3>Subscribe to our newsletter</h3> 
            <form>
              <div>
                <label>
                  <input type='text' name='name' placeholder='NAME' ></input>
                </label>
                <label>
                  <input type="email" name="email" placeholder="Your email address"></input>
                </label>
                <button type="submit" value="Sign up"></button>
              </div>
            </form>   
          </aside>
        </div>

        <div>
          <aside>
                
          </aside>
        </div>

        <div>
          <aside>
                
          </aside>
        </div>

        <div>
          <aside>
                
          </aside>
        </div>

      </div>
     
      <div>
        <p>&copy; 2020 TRADER</p>
      </div>

    </footer>
  );
};

export default Footer;


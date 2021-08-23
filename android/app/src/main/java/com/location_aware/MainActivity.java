package com.location_aware;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
// import com.airbnb.android.react.maps.MapsPackage;
//  import java.util.List;
//  import java.util.Arrays;
//  import com.facebook.react.shell.MainReactPackage;
//  import com.facebook.react.ReactPackage;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "location_aware";
  }
  
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  // @Override
  // protected List<ReactPackage> getPackages() {
  //   return Arrays.<ReactPackage>asList(
  //     new MainReactPackage(),
  //     new MapsPackage()
  //   );
  // }
}
